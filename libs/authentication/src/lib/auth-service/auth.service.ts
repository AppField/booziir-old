import { Injectable, OnDestroy, LOCALE_ID, OnInit, InjectionToken, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User as FirebaseUser, auth } from 'firebase/app';
import { IAuthService } from './auth.service.interface';
import { switchMap, take, map } from 'rxjs/operators';
import { SupportedProviders } from '@booziir/shared';
import { User } from '@booziir/shared';

export const USER_COLLECTION_NAME = new InjectionToken<string>('users');
export const DEFAULT_RETURN_URL = new InjectionToken<string>('/home');

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService, OnInit, OnDestroy {
  private subscription: Subscription;

  userSubject$: BehaviorSubject<User>;
  user$: Observable<User>
  returnUrl: string;
  userCollectionName: string;

  constructor(
    @Inject(USER_COLLECTION_NAME) userCollectionName,
    @Inject(DEFAULT_RETURN_URL) defaultReturnUrl,
    private readonly afAuth: AngularFireAuth,
    private readonly afs: AngularFirestore,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.userCollectionName = userCollectionName;
    const localeUser = JSON.parse(localStorage.getItem(userCollectionName));
    this.userSubject$ = new BehaviorSubject<User>(localeUser);
    this.user$ = this.userSubject$.asObservable();
    this.subscription = new Subscription();

    this.subscription.add(
      this.route.queryParamMap.subscribe(params => {
        this.returnUrl = params.get('returnUrl') ? params.get('returnUrl') : defaultReturnUrl
      }));

    this.setupAuthState();
  }
  ngOnInit() {
    console.log(this.userCollectionName);
  }

  setupAuthState(): void {
    this.subscription.add(
      this.afAuth.authState
        .pipe(
          switchMap((user: FirebaseUser) => user ? this.afs.doc<User>(`${this.userCollectionName}/${user.uid}`).valueChanges() : of(null))
        )
        .subscribe((user: User) => {
          if (user) {
            localStorage.setItem(this.userCollectionName, JSON.stringify(user));
            this.userSubject$.next(user);
          }
        }));
  }

  userValue(): User {
    return this.userSubject$.value;
  }

  // ============ OAuth Methos ============

  loginGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  async oAuthLogin(provider: auth.AuthProvider): Promise<boolean> {
    try {
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      await this.updateUserData(credential.user, SupportedProviders.GOOGLE);
      this.handleLogin(this.returnUrl);
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // ============= EMAIL ==================================================
  async emailRegister(email: string, password: string, displayName: string, readDataProtection: boolean): Promise<boolean> {
    try {
      const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      await this.updateUserData(credential.user, SupportedProviders.EMAIL, displayName, readDataProtection);
      await credential.user.sendEmailVerification();
      this.handleLogin(this.returnUrl);
      return true;
    } catch (error) {
      console.log('could not register');
      return false;
    }
  }
  async emailLogin(email: string, password: string): Promise<boolean> {
    try {
      const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.updateUserData(credential.user, SupportedProviders.EMAIL);
      this.handleLogin(this.returnUrl);
      return true;
    } catch (error) {
      console.log('could not login', error);
      return false;
    }
  }
  async resetPassword(email: string): Promise<boolean> {
    try {
      const fbAuth = auth();
      await fbAuth.sendPasswordResetEmail(email);
      return true;
    } catch (error) {
      console.log('could not reset password', error);
      return false;
    }
  }

  // Set User Data to Firestore

  updateUserData(user: FirebaseUser, provider?: SupportedProviders, displayName?: string, readDataProtection?: boolean) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`${this.userCollectionName}/${user.uid}`);
    const data = new User(user.uid, user.email, user.photoURL, null, null, provider, null, null);

    if (displayName) data.displayName = displayName;
    if (readDataProtection) data.readDataProtection = readDataProtection;

    return userRef.set({ ...data }, { merge: true });
  }

  // ============= Delete user account and delete user document ===========
  async deleteAccount(email: string): Promise<boolean> {
    try {
      await this.afAuth.auth.currentUser.delete();
      this.signOut();
    } catch (error) {
      console.log('could not sign out', error);
      return false;
    }
  }

  // Sign Out
  async signOut(): Promise<void> {
    await this.afAuth.auth.signOut();
    this.userSubject$.next(null);
    localStorage.removeItem(this.userCollectionName);
    this.router.navigate(['register']);
  }

  handleLogin(returnUrl: string): void {
    this.router.navigate([returnUrl]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
