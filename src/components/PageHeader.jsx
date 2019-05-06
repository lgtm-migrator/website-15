// @flow
// @format
import * as React from 'react'

import { rhythm } from '../utils/style.js'
import CalendarPage from './CalendarPage.jsx'
import Date from './Date.jsx'
import SmallPrint from './SmallPrint.jsx'

type Props = {
  title: string,
  monthName: string,
  dayName: string,
  dayOfMonth: string,
  ymdDate: string,
  ymdUpdate: string,
}

const PageHeader = (props: Props): React.Node => {
  const { title, monthName, dayName, dayOfMonth, ymdDate, ymdUpdate } = props

  let calendarIcon = ``
  let updateBlurb = ``
  if (ymdDate) {
    calendarIcon = (
      <>
        <CalendarPage
          monthName={monthName}
          dayName={dayName}
          dayOfMonth={dayOfMonth}
          ymdDate={ymdDate}
          ymdUpdate={ymdUpdate}
        />
      </>
    )
    if (ymdUpdate !== 'Invalid date' && ymdUpdate > ymdDate) {
      updateBlurb = (
        <SmallPrint
          css={{
            display: 'block',
            textAlign: 'right',
          }}
        >
          last updated <Date date={ymdUpdate} />
        </SmallPrint>
      )
    }
  }

  return (
    <>
      <header
        css={{
          display: `flex`,
          border: `1.0px solid hsla(0, 0%, 0%, 0)`,
          minHeight: calendarIcon === `` ? `unset` : rhythm(7 / 2),
          marginBottom: rhythm(1),
        }}
      >
        <h1
          css={{
            lineHeight: 1,
            marginTop: 0,
            marginRight: `auto`,
            marginLeft: 0,
            marginBottom: 0,
            paddingRight: rhythm(1 / 5),
            borderBottom: `none`,
          }}
        >
          {title}
        </h1>
        {calendarIcon}
      </header>
      {updateBlurb}
    </>
  )
}

export default PageHeader
