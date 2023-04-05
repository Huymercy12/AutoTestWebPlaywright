import { test as myTest} from "@playwright/test";

type Huy = {
age: number,
email : string
}

const myFixtureTest = myTest.extend<Huy>({
    age : 23,
    email :  "Huy@gmail.com"
})

export const test = myFixtureTest;
