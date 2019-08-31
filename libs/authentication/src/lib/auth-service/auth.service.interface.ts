import { auth, User as FirebaseUser } from 'firebase/app';
import { SupportedProviders } from '@booziir/shared';
import { User } from '@booziir/shared';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

export interface IAuthService {
    userSubject$: BehaviorSubject<User>;
    user$: Observable<User>
    returnUrl: string;
    userCollectionName: string;

    setupAuthState(): void;

    userValue(): User;

    // ============ OAuth Methos ============

    loginGoogle();

    oAuthLogin(provider: auth.AuthProvider): Promise<boolean>;

    // ============ EMAIL ==================
    emailRegister(email: string, password: string, displayName: string, readDataProtection: boolean): Promise<boolean>

    emailLogin(email: string, password: string): Promise<boolean>

    resetPassword(email: string): Promise<boolean>

    // Sets user data to firestore 
    updateUserData(user: FirebaseUser, provider: SupportedProviders, displayName?: string, readDataProtection?: boolean);

    // ============= Delete user account and delete user document ===========
    deleteAccount(): Promise<boolean>;

    signOut(): Promise<void>;

    handleLogin(returnUrl: string): void;
}