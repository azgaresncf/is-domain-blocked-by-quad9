# is-domain-blocked-by-quad9
Just as the name says.
It verifies if a domain is blocked by Quad9 DNS Services.

# Example
```js
const isBlocked = require('is-domain-blocked-by-quad9');

(async() => {
    const domainInfo = await isBlocked("example.com")
    return domainInfo.blocked
})
```