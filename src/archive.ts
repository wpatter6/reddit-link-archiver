import { Submission } from "snoowrap"

const archive = (posts: string[]) => {
  const postReg = new RegExp(posts.join('|'))

  return (submission: Submission) => {
    if(postReg.test(submission.url)) {
      console.log("POST FOUND", submission);
    }
  }
}

export default archive;