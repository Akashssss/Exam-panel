import { createSlice } from "@reduxjs/toolkit";
import img from "../SubComponents/Questions/Capture.PNG"; 

const initialState = {
  questionsPanel: {
    questions: [
      {
        id: 0,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur ?`,
        questionImage: img ,
        color: "bg-white",
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],
      },
      {
        id: 1,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`2. What is defined as the largest distance between the source and the destination upto which a signal can be received with sufficient strength?`,
        color: "bg-white",
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],
      },
      {
        id: 2,
        instruction: String.raw`Identify the device which is a combination of a transmitter, an amplifier and a receiver which picks up a signal and retransmits it.aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Identify the device which is a combination of a transmitter, an amplifier and a receiver which picks up a signal and retransmits it.`,
        color: "bg-white",          questionImage:img ,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],
      },
      {
        id: 3,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`refers to the frequency range over which equipment operates or the range over which the frequencies in a signal vary. Identify .`,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
      {
        id: 4,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur ?`,
           questionImage:img ,

        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
      {
        id: 5,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur ?`,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
      {
        id: 6,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur ?`,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
      {
        id: 7,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur ?`,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
      {
        id: 8,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur ?`,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
      {
        id: 9,
        instruction: String.raw`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem odit maiores optio nostrum unde nulla. Nam a ab deserunt tenetur. Veritatis itaque blanditiis eaque consequuntur repellendus aperiam
 sapiente sit Numquam sint quisquam aspernatur aut veritatis blanditiis facilis qu non voluptatem in labore reiciendis iure nulla soluta a molestias dolores totam est velit quoPlaceat, illum. Quibusdam?
   Itaque dicta harum quas aliquam error praesentium sed accusamus. Sed fuga odit iusto debitis deleniti maiores, dolorum neque consequatur explicabo cumque nostrum optio quas, repudiandae voluptatum unde? Optio, nihil delectus!
   Veritatis, omnis deleniti, quibusdam esse nisi mollitia quo, eligendi vel earum eveniet totam officiis laudantium? Quas aut corporis perspiciatis distinctio adipisci dicta recusandae! Atque sint possimus corrupti similique molestiae.`,
        question: String.raw`This set of Physics Multiple Choice Questions for IIT JEE Exam focuses on “Basic Terminology Used in Electronic Communication Systems”.

1. What is the electrical analogue of the information produced by the source?`,
        options: [
          "first option",
          "second option",
          "third option",
          "forth option",
        ],

        color: "bg-white",
      },
    ],
  },
  counter: {
    review: 0,
    count: 0,
  },
};

export const QuestionSLice = createSlice({
  name: "question",
  initialState,

  reducers: {
    Next: (state) => {
      state.questionsPanel.questions[state.counter.count].color =
        "bg-green-500";
      state.counter.count = (state.counter.count + 1) % 10;
      return state;
    },
    Review: (state) => {
      state.questionsPanel.questions[state.counter.count].color =
        "bg-yellow-300";
      state.counter.count = (state.counter.count + 1) % 10;
      return state;
    },
    Dump: (state) => {
      state.questionsPanel.questions[state.counter.count].color = "bg-zinc-300";
      state.counter.count = (state.counter.count + 1) % 10;
      return state;
    },
    Previous: (state) => {
      state.counter.count = (state.counter.count - 1 + 10) % 10;
    },
    ClearResponse: (state) => {
      state.questionsPanel.questions[state.counter.count].color =
        "bg-white";
      state.counter.count = (state.counter.count + 1) % 10;
      return state;
    },
  },
});

export const { Next, Review, Dump, Previous ,ClearResponse} = QuestionSLice.actions;

export default QuestionSLice.reducer;
