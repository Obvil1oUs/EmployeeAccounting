import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../emloyee-list/employee-list';
import EmployeeAddForm from '../emplyee-add-form/emplyee-add-form';

import './app.css';

function App () {

    const data = [
        {name: 'Jhon S.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 4000, increase: true, id: 2},
        {name: 'Carl W.', salary: 1500, increase: false, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeeList data={data}/>
            <EmployeeAddForm/>
        </div>
    )
}

export default App;