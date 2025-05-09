"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function fetchUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const userData = {
                        name: "John Doe",
                        age: 30,
                    };
                    resolve(userData);
                }, 1000); // ১ সেকেন্ডের ডিলে
            });
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield fetchUserData();
            return user;
        });
    }
    const showData = main();
    console.log(showData);
    //
}
