export class PullRequest {
  title: string
  body: string
  number: number
  owner: string
  repo: string

  constructor(
    title: string,
    body: string,
    number: number,
    owner: string,
    repo: string
  ) {
    this.title = title
    this.body = body
    this.number = number
    this.owner = owner
    this.repo = repo
  }

  addIntoTopOfBody = (str: string) => this.updateBody(`${str}\n${this.body}`)
  updateBody = (body: string) => {
    this.body = body
    return this
  }
}
