import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../emloyee-list/employee-list';
import EmployeeAddForm from '../emplyee-add-form/emplyee-add-form';

import './app.css';

function App () {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeeList/>
            <EmployeeAddForm/>
        </div>
    )
}

export default App;