[Выводы для нетерпеливых](./SUMMARY.md)

> node .\index.js --checker=lite

```
While loop initial x 61.66 ops/sec +0.21% (62 runs sampled)
While loop opt x 68.98 ops/sec +0.16% (69 runs sampled)
For loop initial x 58.68 ops/sec +0.22% (73 runs sampled)
For loop opt x 70.32 ops/sec +0.19% (70 runs sampled)
Fastest is For loop opt
```

> node .\index.js --checker=heavy

```
While loop initial x 6.47 ops/sec +0.36% (20 runs sampled)
While loop opt x 6.84 ops/sec +0.23% (21 runs sampled)
For loop initial x 3.89 ops/sec +0.17% (14 runs sampled)
For loop opt x 6.65 ops/sec +0.23% (21 runs sampled)
Fastest is While loop opt
```

> node .\index.js --checker=regexp

```
While loop initial x 3.80 ops/sec +0.34% (14 runs sampled)
While loop opt x 3.95 ops/sec +0.34% (14 runs sampled)
For loop initial x 2.31 ops/sec +0.28% (10 runs sampled)
For loop opt x 4.00 ops/sec +0.28% (14 runs sampled)
Fastest is For loop opt
```

> node .\index.js --checker=isletter

```
While loop initial x 3.51 ops/sec +0.39% (13 runs sampled)
While loop opt x 3.57 ops/sec +0.23% (13 runs sampled)
For loop initial x 2.18 ops/sec +0.20% (10 runs sampled)
For loop opt x 3.48 ops/sec +0.21% (13 runs sampled)
Fastest is While loop opt
```

> node .\index.js --checker=lite --data=./data-small.json

```
While loop initial x 742,890 ops/sec +0.15% (93 runs sampled)
While loop opt x 801,030 ops/sec +0.18% (94 runs sampled)
For loop initial x 673,339 ops/sec +0.16% (94 runs sampled)
For loop opt x 738,424 ops/sec +0.17% (92 runs sampled)
Fastest is While loop opt
```

> node .\index.js --checker=heavy --data=./data-small.json

```
While loop initial x 78,417 ops/sec +0.16% (93 runs sampled)
While loop opt x 83,254 ops/sec +0.16% (90 runs sampled)
For loop initial x 48,743 ops/sec +0.15% (94 runs sampled)
For loop opt x 78,013 ops/sec +0.18% (94 runs sampled)
Fastest is While loop opt
```


> node .\index.js --checker=regexp --data=./data-small.json

```
While loop initial x 44,205 ops/sec +0.39% (94 runs sampled)
While loop opt x 45,941 ops/sec +0.52% (91 runs sampled)
For loop initial x 27,229 ops/sec +0.54% (92 runs sampled)
For loop opt x 47,582 ops/sec +0.64% (92 runs sampled)
Fastest is For loop opt
```

> node .\index.js --checker=isletter --data=./data-small.json

```
While loop initial x 39,831 ops/sec +0.34% (91 runs sampled)
While loop opt x 34,965 ops/sec +5.39% (82 runs sampled)
For loop initial x 23,675 ops/sec +0.86% (85 runs sampled)
For loop opt x 41,404 ops/sec +0.68% (86 runs sampled)
Fastest is For loop opt
```

[Выводы](./SUMMARY.md)
