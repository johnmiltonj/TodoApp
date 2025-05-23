export function getColor(status: string) {
  let color = "";

  switch (status) {
    case "started":
      color = "blue";
      break;
    case "progress":
      color = "red";
      break;
    case "completed":
      color = "yellow";
      break;
  }

  return color;
}