import React from 'react'
import NavbarTeacher from './NavbarTeacher'
import { Switch , Route } from 'react-router'
import TStudent from './T-Student'
export default function TeacherHome() {
    return (
        <div>
      <NavbarTeacher />
      <div className="AdminHomeBack">
        <Switch>
          <Route exact path="/Teacher-home/student" component={TStudent} />
          {/* <Route exact path="/home/add-student" component={StudentForm} /> */}
          {/* <Route exact path="/Admin-home/teacher" component={Teacher} /> */}
        </Switch>
      </div>
    </div>
    )
}
