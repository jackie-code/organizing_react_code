import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NotePageNav from './NotePageNav'

describe(`NotePageNav component`, () => {
  it('renders a .NotePageNav by default', () => {
    const wrapper = shallow(<NotePageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders a h3 with folder name when in props', () => {
    const props = {
      match: {
        params: {
          noteid: 'test-note-id'
        }
      }
    }
    const context = {
      notes: [{ noteid: 'test-note-id', folderid: 'test-folder-id' }],
      folders: [{ folderid: 'test-folder-id', folder_title: 'Important' }]
    }

    const h3 = shallow(<NotePageNav {...props} />, context)
      .find('.NotePageNav__folder-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})
