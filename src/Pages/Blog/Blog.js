import React from "react";

const Blog = () => {
  return (
    <div className="text-start w-75 mx-auto">
      <div className="my-5 font-thin">
        <div className="text-center">
          <h2 className="merun text-danger">
            Difference between SQL and NoSQL ?
          </h2>
        </div>
        <p>
          <strong>SQL vs NoSQL: 6 Main Differences </strong> <br />
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL. When choosing a
          modern database, one of the biggest decisions is picking a relational
          (SQL) or non-relational (NoSQL) data structure. While both are viable
          options, there are key differences between the two that users must
          keep in mind when making a decision. <br />
          <strong>
            There are five practical differences between SQL and NoSQL:
          </strong>
          <ul>
            <li>Language</li>
            <li>Scalability</li>
            <li>Structure</li>
            <li>Properties</li>
            <li>Support and communities</li>
          </ul>
          SQL databases are relational, NoSQL databases are non-relational.{" "}
          <br />
          SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
          <br />
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. <br />
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. <br />
          SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </p>
      </div>
      <hr className="border-5 font-extrabold text-danger" />
      <div className="my-5 font-thin">
        <div className="text-center">
          <h2 className=" text-danger"> What is JWT, and how does it work?</h2>
        </div>

        <p>
          <h6 className="w-50 mx-auto my-5">
            "JWT, full form is JSON Web Token, is an open standard used to share
            security information between two parties — a client and a server.
            Each JWT contains encoded JSON objects, including a set of claims.
            JWTs are signed using a cryptographic algorithm to ensure that the
            claims cannot be altered after the token is issued."
          </h6>
          <strong>
            <p>
              In short, JWTs are used as a secure way to authenticate users and
              share information.
            </p>
          </strong>
          <p>
            <strong>How JWT Works</strong> JWTs differ from other web tokens in
            that they contain a set of claims. Claims are used to transmit
            information between two parties. What these claims are depends on
            the use case at hand. For example, a claim may assert who issued the
            token, how long it is valid for, or what permissions the client has
            been granted.
          </p>
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          <i> xxxxx.yyyyy.zzzzz.</i> <br /> Once decoded, you will get two JSON
          strings: The header and the payload. The signature. The JOSE (JSON
          Object Signing and Encryption) header contains the type of token — JWT
          in this case — and the signing algorithm. <br />
          <p></p>
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting. There are no mandatory claims for a JWT, but overlaying
          standards may make claims mandatory. For example, when using JWT as
          bearer access token under OAuth2.0, iss, sub, aud, and exp must be
          present. some are more common than others. <p></p> The signature
          ensures that the token hasn’t been altered. The party that creates the
          JWT signs the header and payload with a secret that is known to both
          the issuer and receiver, or with a private key known only to the
          sender. When the token is used, the receiving party verifies that the
          header and payload match the signature
        </p>
      </div>
      <hr className="border-5 font-extrabold text-danger" />
      <div className="mt-5 font-thin">
        <div className="text-center">
          <h2 className="text-danger mb-5">
            What is the difference between javascript and NodeJS?
          </h2>
        </div>
        <div className=" mx-auto">
          <p>
            JavaScript is a high-level programming language that makes our web
            pages and web applications dynamic and interactive by giving them
            the ability to think and act. JavaScript is a lightweight (easy to
            learn syntax) and object-oriented programming language whereas
            Node.js is a runtime environment built on google v8 engine and
            typically used to represent a list of objects and functions that
            JavaScript programs can access.
          </p>
          <p>
            JavaScript is a proper high-level programming language used to
            create web scripts whereas Node.js is a run time environment built
            on google’s v8 engine.
          </p>
          <p>
            JavaScript is executed in the browser whereas using Node.js gives us
            the ability to execute JavaScript outside the browser.
          </p>
          <p>
            JavaScript can manipulate DOM or add HTML within whereas Node.js
            doesn’t have the capability to add HTML.
          </p>
          <p>
            JavaScript is mainly used to create front end web applications or
            develop client-side whereas Node.js is used on the back end
            development that is server-side development
          </p>
          <p>
            JavaScript follows the standard of JavaScript when writing programs
            whereas Node.js is written in C++ while using the v8 engine, it runs
            JavaScript outside the browser.
          </p>
          <p>
            JavaScript requires any running environment as it can execute on any
            engine such as Firefox’s spider monkey, v8 engine of google chrome,
            JavaScript core of Safari whereas Node.js runs only on the v8 engine
            of google chrome.
          </p>
          <p>
            In this post, we saw what JavaScript and Node.js are and then we
            described the differences between them. It should be noted that for
            any web developer the first step is to learn JavaScript and then go
            for Node.js.
          </p>
        </div>
      </div>
      <hr className="border-5 font-extrabold text-danger" />
      <div className="my-5 font-thin">
        <div>
          <h2 className="text-danger mb-5">
            How does NodeJS handle multiple requests at the same time?
          </h2>
        </div>
        <p className="text-center">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue.
        </p>
        <p>
          NodeJS Web Server maintains a limited Thread Pool to provide services
          to client requests. Multiple clients make multiple requests to the
          NodeJS server. NodeJS receives these requests and places them into the
          EventQueue . NodeJS server has an internal component referred to as
          the EventLoop which is an infinite loop that receives requests and
          processes them. This EventLoop is single threaded. In other words,
          EventLoop is the listener for the EventQueue. So, we have an event
          queue where the requests are being placed and we have an event loop
          listening to these requests in the event queue. What happens next? The
          listener(the event loop) processes the request and if it is able to
          process the request without needing any blocking IO operations, then
          the event loop would itself process the request and sends the response
          back to the client by itself. If the current request uses blocking IO
          operations, the event loop sees whether there are threads available in
          the thread pool, picks up one thread from the thread pool and assigns
          the particular request to the picked thread. That thread does the
          blocking IO operations and sends the response back to the event loop
          and once the response gets to the event loop, the event loop sends the
          response back to the client.
        </p>
      </div>
      <hr className="border-5 font-extrabold text-danger" />
    </div>
  );
};

export default Blog;
