const example = {
  myData: [
    {
      project: "tweeter",
      level: "easy",
      data: "24.8.22",
    },
    {
      project: "MySpace",
      level: "hard",
      data: "14.2.27",
    },
    {
      project: "Building Meta",
      level: "very hard",
      data: "1.1.55",
    },
  ],
}

const source = $("#spotcheck-script").html()
const template = HandleBars.compile()
