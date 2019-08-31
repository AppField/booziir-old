import { WhereFilterOp } from '@firebase/firestore-types';

export interface FirebaseQuery {
    field: string;
    operator: WhereFilterOp;
    value: string | boolean | number;
}