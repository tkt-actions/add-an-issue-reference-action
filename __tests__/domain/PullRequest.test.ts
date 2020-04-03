import {PullRequest} from '../../src/domain/PullRequest'

describe('PullRequest', () => {
  it('addIntoTopOfBody', () => {
    const pr = new PullRequest(
      'title',
      'description',
      2,
      'tktcorporation',
      'pr-action'
    )
    expect(pr.addIntoTopOfBody('top').body).toBe('top\ndescription')
  })

  it('update', () => {
    const pr = new PullRequest(
      'title',
      'some description',
      3,
      'tktcorporation',
      'pr-action'
    )
    expect(pr.updateBody('updated').body).toBe('updated')
  })
})
