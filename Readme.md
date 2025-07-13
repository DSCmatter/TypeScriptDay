# Typescript Study Guide

## Introduction to TypeScript
- **What is TypeScript?**
  - Open-source programming language developed and maintained by Microsoft.
  - Super set of JavaScript: any valid JavaScript code is also valid TypeScript.
  - Adds static type definitions to JavaScript.
- **Why use TypeScript?**
  - Prevents mistakes during development.
  - Improves code reliability and maintainability.
  - Essential for modern web development and competitive job markets.
- **Compilation**
  - TypeScript code is compiled into JavaScript.
  - The compiled JavaScript is what runs in browsers or servers.

## Prerequisites
- Basic knowledge of JavaScript.
- Understanding of JavaScript syntax and concepts.

## Setting Up TypeScript
- **Installation**
  - Use npm: `npm install -g typescript`
- **Initializing Configuration**
  - Run `tsc --init` to generate `tsconfig.json`.
  - Configure compiler options (e.g., strict mode, target JavaScript version).
- **VS Code Setup**
  - Create a `.ts` file (e.g., `tutorial.ts`).
  - Compile with `tsc tutorial.ts`.
  - Run JavaScript output with Node.js: `node tutorial.js`.

## Basic Types and Type Annotations
- **Declaring Variables**
  - Syntax: `let variableName: type = value;`
  - Examples:
    - `let age: number = 30;`
    - `let name: string = "John";`
    - `let isActive: boolean = true;`
- **Arrays**
  - Syntax: `let numbers: number[] = [1, 2, 3];`
  - String array: `let names: string[] = ["Alice", "Bob"];`
- **Any Type**
  - `let x: any = 5;` (accepts any type, use sparingly)
- **Function Types**
  - Define parameter types and return type:
    ```typescript
    function concatenate(a: string, b: string): string {
      return a + b;
    }
    ```
  - Enforce return type:
    ```typescript
    function getNumber(): number {
      return 42;
    }
    ```

## Working with Objects
- **Object Literals**
  - Example:
    ```typescript
    const user = {
      id: 1,
      name: "Alice",
      age: 25
    };
    ```
- **Interfaces**
  - Define object shape:
    ```typescript
    interface User {
      id: number;
      name: string;
      age?: number; // optional property
    }
    const user: User = { id: 1, name: "Alice" };
    ```
- **Optional Properties**
  - Use `?` to make properties optional.
- **Readonly Properties**
  - Use `readonly` to prevent modification:
    ```typescript
    interface Employee {
      readonly id: number;
      name: string;
    }
    ```

## Functions
- **Defining Functions with Types**
  ```typescript
  function greet(name: string): void {
    console.log(`Hello, ${name}`);
  }
  ```
- **Return Types**
  - Specify expected return type.
- **Optional Parameters**
  ```typescript
  function logMessage(message: string, userId?: number): void {
    // ...
  }
  ```

## Union and Intersection Types
- **Union Types (`|`)**
  - Allow variables to hold multiple types.
  - Example:
    ```typescript
    let id: string | number;
    id = "abc123";
    id = 123;
    ```
- **Type Aliases**
  - Define custom union types:
    ```typescript
    type ID = string | number;
    let userId: ID;
    ```
- **Intersection Types (`&`)**
  - Combine multiple types into one:
    ```typescript
    interface Person {
      name: string;
    }
    interface Employee {
      employeeId: number;
    }
    type Staff = Person & Employee;
    const staffMember: Staff = { name: "John", employeeId: 123 };
    ```

## Enums
- **Purpose**
  - Define a set of named constants.
- **Example**
  ```typescript
  enum LoginError {
    Unauthorized = "UNAUTHORIZED",
    NoUser = "NO_USER",
    WrongCredentials = "WRONG_CREDENTIALS",
    Internal = "INTERNAL_ERROR"
  }
  ```
- **Usage**
  ```typescript
  function handleError(error: LoginError) {
    if (error === LoginError.Unauthorized) {
      console.log("User not authorized");
    }
  }
  ```

## Type Aliases
- **Creating Custom Types**
  - Useful for union types or complex types.
  - Example:
    ```typescript
    type ID = string | number;
    ```

## Readonly Properties
- **Immutable Properties**
  - Use `readonly` in interfaces or classes.
  - Example:
    ```typescript
    interface Employee {
      readonly id: number;
      name: string;
    }
    ```

## Generics
- **Purpose**
  - Write flexible, reusable classes and functions.
- **Example: Storage Class**
  ```typescript
  class Storage<T> {
    private contents: T[] = [];

    add(item: T): void {
      this.contents.push(item);
    }

    get(index: number): T | undefined {
      return this.contents[index];
    }
  }
  ```
- **Usage**
  ```typescript
  const stringStorage = new Storage<string>();
  stringStorage.add("hello");
  console.log(stringStorage.get(0));

  const numberStorage = new Storage<number>();
  numberStorage.add(42);
  ```

## Practical Tips
- Use `strict` mode for better type safety.
- Use interfaces to define object shapes.
- Use union types for variables that can accept multiple types.
- Use intersection types to combine multiple object types.
- Use enums for fixed sets of constants.
- Use `readonly` for immutable properties.
- Use generics for reusable, type-safe classes and functions.

## Additional Resources
- TypeScript official documentation.
- Tutorials on TypeScript with React, Node.js, and backend frameworks.
- Community examples and open-source projects.

---

**Remember:** Mastering TypeScript enhances code quality, reduces bugs, and is highly valued in modern web development. Practice by building small projects and gradually incorporating advanced features like generics and complex types.