# ๐๏ธ ์ฝ์์ ๋ ฌ(Insertion sort)

![](/InsertionSort/insertion-sort.png)

- ์์์ ์นด๋๋ฅผ ์ ๋ ฌํ๋ ๋ฐฉ๋ฒ๊ณผ ์ ์ฌํ๋ค.
  - ์๋ก์ด ์นด๋๋ฅผ ๊ธฐ์กด์ ์ ๋ ฌ๋ ์นด๋ ์ฌ์ด์ ์ฌ๋ฐ๋ฅธ ์๋ฆฌ๋ฅผ ์ฐพ์ ์ฝ์ํ๋ค.
  - ์๋ก ์ฝ์๋  ์นด๋์ ์๋งํผ ๋ฐ๋ณตํ๊ฒ ๋๋ฉด ์ ์ฒด ์นด๋๊ฐ ์ ๋ ฌ๋๋ค.
- ์๋ฃ ๋ฐฐ์ด์ ๋ชจ๋  ์์๋ฅผ ์์์๋ถํฐ ์ฐจ๋ก๋๋ก ์ด๋ฏธ ์ ๋ ฌ๋ ๋ฐฐ์ด ๋ถ๋ถ๊ณผ ๋น๊ต ํ์ฌ,
  ์์ ์ ์์น๋ฅผ ์ฐพ์ ์ฝ์ํจ์ผ๋ก์จ ์ ๋ ฌ์ ์์ฑํ๋ ์๊ณ ๋ฆฌ์ฆ
- ๋งค ์์๋ง๋ค ํด๋น ์์๋ฅผ ์ฝ์ํ  ์ ์๋ ์์น๋ฅผ ์ฐพ์ ํด๋น ์์น์ ๋ฃ๋๋ค.

# ๐ ์ ๋ ฌ ์๊ณ ๋ฆฌ์ฆ ์๊ฐ๋ณต์ก๋ ๋น๊ต

| Name       | Best               | Avg                | Worst              | Run-time |
| ---------- | ------------------ | ------------------ | ------------------ | -------- |
| > ์ฝ์์ ๋ ฌ | n                  | n<sup>2</sup>      | n<sup>2</sup>      | 7.438    |
| ์ ํ์ ๋ ฌ   | n<sup>2</sup>      | n<sup>2</sup>      | n<sup>2</sup>      | 10.842   |
| ๋ฒ๋ธ์ ๋ ฌ   | n<sup>2</sup>      | n<sup>2</sup>      | n<sup>2</sup>      | 22.894   |
| ์ธ์ ๋ ฌ     | n                  | n<sup>1.5</sup>    | n<sup>2</sup>      | 0.056    |
| ํต์ ๋ ฌ     | n log<sub>2</sub>n | n log<sub>2</sub>n | n<sup>2</sup>      | 0.014    |
| ํ์ ๋ ฌ     | n log<sub>2</sub>n | n log<sub>2</sub>n | n log<sub>2</sub>n | 0.034    |
| ๋ณํฉ์ ๋ ฌ   | n log<sub>2</sub>n | n log<sub>2</sub>n | n<sup>2</sup>      | 0.026    |
