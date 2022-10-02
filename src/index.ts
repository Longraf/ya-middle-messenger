import "./main.scss";

type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: "3",
};

Object.defineProperty(data, "title", {});

console.log(data);
console.log(text);
input.addEventListener("keyup", (e) => {
  console.log("keyup");
  console.log(e.currentTarget);
  console.log(data.title);
});
