# React Interview Questions and Answers

## What is React ?
React is a JavaScript library developed by Facebook (now Meta) for building user interfaces, especially for single-page applications (SPAs).

#### Key Points:
1. **Library, not a framework**
React focuses specifically on building UI components. Unlike full-fledged frameworks (like Angular), it does not dictate things like routing or state management—those can be added using separate libraries (e.g., React Router, Redux).
2. **Component-Based**
Applications in React are built using reusable components, which manage their own state and logic.
3. **Declarative**
Instead of telling the DOM how to change (imperative), you describe what the UI should look like for a given state, and React updates it efficiently.
4. **Virtual DOM**
React uses a virtual DOM to optimize rendering and update only what’s necessary.

## Why React is popular compared to other frameworks like Angular, Vue, etc. ?
React is popular compared to other frameworks (like Angular, Vue, etc.) because of several key advantages that appeal to both developers and companies. Here's a breakdown of why:
1. **Component-Based Architecture**
- React encourages building UI using reusable, isolated components, making large applications easier to manage, test, and scale.
- Example: A Button, Modal, or FormInput component can be reused across the entire app.
2. **Virtual DOM = Better Performance**
- React uses a Virtual DOM, which compares old and new UI states and updates only what's necessary in the real DOM. This results in:
  - Faster rendering
  - Better performance for dynamic UIs
3. **Strong Community & Ecosystem**
- React has a massive global developer community and ecosystem:
  - Tons of open-source components and libraries
  - Lots of tutorials, courses, tools, and support
  - Backed by Meta (Facebook) and used by major companies like Instagram, Netflix, Airbnb, etc.
4. **JSX – Easy to Read and Write**
- React uses JSX, which combines HTML-like syntax with JavaScript, making it easier to visualize the UI structure within logic.
  ```
  const element = <h1>Hello, world!</h1>;
  ```
5. **Flexibility & Lightweight**
- React focuses only on the view layer, so developers can:
  - Choose their own libraries for routing (e.g., React Router)
  - Manage state using Redux, Zustand, or Context API
  - Use it with various backend stacks
- This flexibility makes React highly adaptable.
6. **React Native = Cross-Platform Development**
- React’s principles are extended to mobile development via React Native, allowing developers to build native apps for iOS and Android using the same React skills.
7. **Strong Tooling and Dev Experience**
- React DevTools for debugging
- Hot Module Replacement (HMR) for instant UI updates during development
- Hooks API (since React 16.8) makes managing state and side-effects easier in functional components
8. **Huge Job Market**
- Because of its popularity, there's high demand for React developers globally—making it a smart choice career-wise.
#### React vs Angular vs Vue
| Feature / Aspect |	React	| Angular |	Vue |
| ----------------- | ----- | ------ | ----- |
| Type |	Library (for UI)|	Full-fledged Framework	| Progressive Framework |
| Developed By	| Meta (Facebook) |	Google	| Evan You (ex-Google) |
| Language	|JavaScript + JSX|	TypeScript	|JavaScript + optional TypeScript|
|Learning Curve|	Moderate|	Steep (lots of concepts, RxJS, DI)|	Easy to Moderate|
|Data Binding	|One-way|	Two-way	|Two-way (can also use one-way)|
|DOM|	Virtual DOM|	Real DOM with change detection|	Virtual DOM|
|Performance|	Excellent (thanks to Virtual DOM)|	Very good|	Excellent|
|Component Model|	Functional + Class (now Hooks preferred)|	Class-based + Decorators|	Options API / Composition API|
|State Management|	React Context, Redux, Zustand, etc.|	Built-in (RxJS, Services)	|Vuex (or Pinia for modern apps)|
|Routing|	React Router	|Angular Router (built-in)|	Vue Router|
|Testing	|Jest, React Testing Library	|Jasmine, Karma (built-in)|	Jest, Mocha, Vue Test Utils|
|Mobile Development|	React Native|	NativeScript, Ionic|	Vue Native, Quasar, NativeScript|
|Size (bundle)|	Small to Medium|	Large (because of all built-ins)|	Small to Medium|
|Use Case |Fit	SPAs, enterprise apps, mobile apps|	Enterprise-scale apps, complex workflows	|Simple to medium complexity SPAs|
|Job Market| Very High	|High (especially in large enterprises|)	Growing steadily|
#### When to Choose What?
1. **React:**
  - You're building a modern SPA or mobile app
  - You want flexibility in choosing your own stack
  - You prefer JSX and functional components
  - You like a huge ecosystem and community support
  - Company	Uses - Facebook, Instagram, Netflix, Airbnb, Uber
2. **Angular**
  - You're building a large-scale enterprise application
  - You prefer TypeScript and a full opinionated framework
  - You want everything (routing, state, testing) out of the box
  - Company	Uses - Google, Microsoft Office Web, Upwork
3. **Vue**
  - You want to learn fast and build quickly
  - You’re building a small to medium-sized project
  - You want the best of both React and Angular with simplicity
  - Company	Uses - Alibaba, Xiaomi, GitLab, Laravel

## How to handle errors in React.js ?
In React.js, you can handle errors in three main ways, depending on the type of error you're dealing with:
1. **Runtime Errors in UI – Use Error Boundaries (Class Components Only)**
React provides a concept called Error Boundaries to catch JavaScript errors in the component tree (e.g., rendering, lifecycle methods).
```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state so next render shows fallback UI
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Send to logging service
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}
```
Usage:
```
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```
**Note:** Error Boundaries do not catch errors in:
  - Event handlers
  - Asynchronous code (e.g., setTimeout)
  - Server-side rendering
  - Errors thrown inside Error Boundaries themselves
2. **Async Errors (e.g., API Calls)**
Use try/catch blocks inside async functions or useEffect hooks.
```
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users');
        setUsers(res.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
3. **Form Validation & Custom Errors**
Use form validation libraries like Formik, React Hook Form, or write custom validations.
```
function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }
    setError('');
    // Continue submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```
To monitor and log errors in production:
  - Use tools like Sentry, LogRocket, New Relic, or Datadog
  - Send caught errors to a backend logging service via fetch or axios
    
## How to check the execution time of a JavaScript function?
1. **console.time() and console.timeEnd()**
  - This is the simplest and most readable way.
  ```
function exampleFunction() {
    console.time("exampleFunction");
  
    // Your logic here
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
    }
  
    console.timeEnd("exampleFunction");
  }
  exampleFunction();
```
- Output (in console):
  ```
  exampleFunction: 12.345ms
  ```
2. **Using performance.now() (High-resolution timer)**
  - Useful for more precise timing, especially in performance-sensitive apps.
  ```
  function exampleFunction() {
    const start = performance.now();
  
    // Code to measure
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
    }
  
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
  }
  exampleFunction();
```
- performance.now() gives time in fractional milliseconds (e.g., 5.123456 ms), more accurate than Date.now().
3. **Using Date.now() (Simple but Less Accurate)**
  - This is less precise (millisecond accuracy) but still works for many cases.
  ```
  function exampleFunction() {
    const start = Date.now();
  
    // Code to measure
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
    }
  
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
  }
  exampleFunction();
  ```

## How to monitor React code?
Monitoring React code means tracking the health, performance, errors, and user interactions of your React application in real time, both in development and production. Here’s how you can monitor React code effectively:
1. **Error Monitoring**
  - Use tools like:
    - Sentry — captures runtime errors, stack traces, user context
    - LogRocket — records session replay + errors
    - Bugsnag, Rollbar — alternatives for error tracking
  - How to integrate:
    - Install SDK, wrap your app with their provider, and they automatically capture unhandled errors including React errors and promise rejections.
2. **Performance Monitoring**
  - React DevTools Profiler (for development):
    - Lets you inspect component render times and why components re-render.
  - Browser Performance APIs:
    - Use performance.mark() and performance.measure() to instrument specific parts of your code.
  - APM Tools:
    - Application Performance Monitoring tools like New Relic, Datadog, or Elastic APM can track frontend metrics (page load time, resource timing).
3. **Logging**
  - Use structured logging for important app events or errors via console.log() during development.
  - Use remote logging libraries that send logs to your backend or services like Loggly or Papertrail.
4. **User Behavior Analytics**
  - Use Google Analytics, Mixpanel, or Hotjar to track user interactions, page views, clicks, and heatmaps.
5. **Custom Monitoring**
  - Add health checks or heartbeat pings to backend APIs your React app calls.
  - Track API response times and errors with interceptors (e.g., Axios interceptors).
6. **Best Practices**
  - Add Error Boundaries to catch UI errors gracefully.
  - Use React Profiler API to identify bottlenecks.
  - Monitor bundle size with tools like webpack-bundle-analyzer to keep app performant.

## How to handle 1000s of APIs in React application?
Handling thousands of APIs in a React application requires a well-structured architecture that supports scalability, maintainability, and performance. 

When working with hundreds or thousands of APIs in a React application, I focus on organizing API communication through a layered architecture and reusable utilities. Here’s how I handle it:
- **Centralized API Layer:** I create a dedicated api/ directory with modular service files. Each file handles related endpoints—for example, userService.js, orderService.js, etc. This keeps API logic isolated from components.
- **Axios Instance with Interceptors:** I use a configured Axios instance that handles base URL, headers, authentication tokens, error handling, and logging. This ensures consistency across all API calls and reduces repetition.
- **Code Generation (Optional):** For large APIs, especially REST or GraphQL, I use tools like Swagger Codegen, OpenAPI Generator, or GraphQL Codegen to auto-generate request functions and types, which improves speed and accuracy.
- **Caching and Performance:** I use libraries like React Query or TanStack Query to manage API calls, caching, and background refreshing. This reduces the number of network requests and improves user experience.
- **Error and Loading State Abstraction:** I abstract common states (loading, error, empty) into reusable components or hooks, which avoids duplicating logic across screens.
Pagination & Throttling: For endpoints returning large datasets, I implement pagination and debounce input-based APIs to reduce load and improve performance.
- **Scalable Folder Structure:** I follow a feature-based folder structure and colocate related APIs with the corresponding UI components or hooks to maintain code clarity as the app scales.

## When multiple APIs run at the same time in React, and how to detect which one failed?
When multiple APIs are triggered in parallel, I use Promise.allSettled() instead of Promise.all. It allows me to check the status of each individual request and gracefully handle failures. I log errors, show fallback UI, and ensure successful APIs still render their data.

## How to handle 1000 of rows in react tables?
When rendering thousands of rows in a React table, I focus on performance and user experience. I use techniques like pagination, virtual scrolling, and lazy loading to avoid blocking the main thread and improve rendering efficiency. Here's how I typically approach it:
1. **Pagination** – Load and display data in smaller chunks (e.g., 50 or 100 rows per page).
2. **Virtualization** – Use libraries like react-window or react-virtualized to render only visible rows in the viewport.
3. **Debouncing/Throttling** – For filtering and searching large datasets, I debounce the input to reduce re-renders.
4. **Server-Side Fetching** – For very large datasets, I load data page-by-page from the backend using query parameters.
5. **Table Libraries** – I prefer libraries like React Table, TanStack Table, or AG Grid, which support large datasets, virtualization, sorting, filtering, and more.

## How to handle dynamic routes in React?
I handle dynamic routes in React using React Router. I define dynamic route paths using :param syntax—for example, /user/:id. Then, inside the component, I extract the parameter using the useParams() hook. This helps me render dynamic pages like user profiles, product details, or blog posts based on URL parameters.

## How to handle multi-forms in React?
Handling multi-step forms (multi-forming) in React involves breaking a large form into smaller, manageable steps (or pages), while maintaining a shared form state. This improves UX and keeps the form structured.

To handle multi-step forms in React, I split the form into separate components for each step and maintain a shared state—either in a parent component or using a state management library like Redux or Zustand. I control the current step using a step state variable and render the corresponding form component conditionally. I also validate each step individually and only allow progression when it's valid. At the end, I submit the combined data to the backend.

##  
