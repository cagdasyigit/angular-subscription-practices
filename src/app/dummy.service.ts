import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class DummyService {

    private counter: number = 0;

    getDummyObject(): Observable<number> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(++this.counter);
                observer.complete();
            }, 300);
        });
    }

}