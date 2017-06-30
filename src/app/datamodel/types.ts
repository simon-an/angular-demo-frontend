import { Skill } from './skill';
type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Keep types the same, but make each property to be read-only.
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Same property names, but make the value a promise instead of a concrete one
type Deferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};

// Wrap proxies around properties of T
type Proxify<T> = {
    [P in keyof T]: { get(): T[P]; set(v: T[P]): void }
};

type PartialSkill = Partial<Skill>;

// function assign<T>(obj: T, props: Partial<T>): void;
// function freeze<T>(obj: T): Readonly<T>;
// From T pick a set of properties K
// declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

// const nameAndAgeOnly = pick(person, "name", "age");  // { name: string, age: number }
