import React, { useContext} from 'react';
import Charts from '../Components/Charts';
import { CombinedContext } from '../Context/context';


const Analytics = () => {
    const combinedContext = useContext(CombinedContext);
    const companies = combinedContext.allDatas.Companies || [];
    const persons = combinedContext.allDatas.Person || [];
    const company = companies.find(c => c ? c.name.toLowerCase() : c == combinedContext.companyURL.toLowerCase())
    const filteredPersons = persons.filter( p => p.company == company.id)

    return (
        <div className="main_blog">
            <Charts persons = {filteredPersons} company = {company}/>
        </div>
    );
};

export default Analytics;
