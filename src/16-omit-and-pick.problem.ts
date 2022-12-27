import { userAgent } from "next/server";
import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = User["firstName"] extends User["lastName"];

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
