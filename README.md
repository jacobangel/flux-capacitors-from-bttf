# Flux Workers

I'm sure this is already a thing. I'm just tooling around in public, which means
some of this is likely very naive.

## Action Workers

Distribute the work automatically by passing the action through a worker. 

```
@workerized
longAction,
```

## Alternatives

Promise Based solution for web-workers is probably a smarter approach?

```
LaggyThing.getPrime().then(this.dispatch());
```
