## Timestamp

A localized timestamp like _Oct 7 2018 10:25_

### API

| Property  | Description                                             | Type                 | Default |
| --------- | ------------------------------------------------------- | -------------------- | ------- |
| _mask_    | set fields included in the timestamp                    | string               | `bDYt`  |
| _\*value_ | the date value as an ISO8601 string or a `Date` object. | Date, ISO8601 string | -       |

Also can use `mask` attribute for set format timestamp (example `2011-10-09T14:48:59`)

| Symbol | Description              | Example    |
| ------ | ------------------------ | ---------- |
| `Y`    | year                     | _2011_     |
| `M`    | month (decimal value)    | _10_       |
| `D`    | day (decimal value)      | _09_       |
| `m`    | minutes                  | _48_       |
| `h`    | hours                    | _14_       |
| `s`    | seconds                  | _59_       |
| `a`    | day of week (short form) | _Tue_      |
| `A`    | day of week (long form)  | _Tuesday_  |
| `b`    | month (short form)       | _2011_     |
| `B`    | month (long form)        | _2011_     |
| `t`    | time                     | _14:48:69_ |

Also you can use different symbols for decorate your timestamp (`|/\*:.,`)

### Example

Below is the result of using different masks for `2011-10-09T14:48:59`

| Mask    | Result                   |
| ------- | ------------------------ |
| `bDYt`  | _Oct 09 2011 14:48:59_   |
| `ADBY`  | _Sunday 09 October 2011_ |
| `DBh:m` | _09 October 14 : 48_     |
| `Y/M/D` | _2011 / 10 / 09_         |
| `DMYt`  | _09 10 2011 14:48:59_    |
