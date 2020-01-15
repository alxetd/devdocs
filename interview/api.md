---
pageClass: api
---
# Api
## Integrating third party services
A common issue when integrating third party services within your own API requests is having to wait for the response, and as such, forcing the user to have to wait for longer.
How would you go about avoiding this? Name any relevant technologies if appropriate
### Answer
The most effective way to solve this problem is to use queues.
When a request is made to our API, a separate job is then created and added to a queue. This job will then be executed independently to the requested endpoint, thus allowing the server to respond without delay.
There are many queue providers but the most notable are:
- Amazon SQS
- Redis
- Beanstalkd
## How would you prevent a bot from scraping your publicly accessible API?
### Answer
If the data within the API is publicly accessible then, technically, it is not possible to completely prevent data scraping. However, there is an effective solution that will deter most people/bots: rate limiting (also known as throttling).

Throttling will prevent a certain device from making a defined number of requests within a defined time. Upon exceeding the defined number of requests, a 429 Too Many Attempts HTTP error should be thrown.

Note: It is important to track the device with more than just an IP address as this is not unique to the device and can result in an entire network losing access to an API.

Other less-than-ideal answers include:

- Blocking requests based on the user agent string (easy to circumvent)
- Generating temporary “session” access tokens for visitors at the front end. This isn’t secure: Storing a secret on the front end can be reverse-engineered, thus allowing anyone to generate access tokens.
## If a user attempts to create a resource that already exists—for example, an email address that’s already registered—what HTTP status code would you return?
### Answer
Although the answer to this is debatable, the widely accepted practice would be to use a 409 Conflict HTTP status code.

It would also be acceptable to return a 422 Unprocessable Entity.

Some may argue that a 400 Bad Request is acceptable, but we discourage this, since conventionally it implies the server did not understand the request, which in this case is not true.
