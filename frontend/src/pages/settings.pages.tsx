import './settings.css'
import AnalyticsTable from '../components/analytics-table/analytics-table.components';
import Navigation from '../components/navigation/navigation.components';
import Analytics from '../components/analytics/analytics.components';



export default function Settings()  {
    return (
        <div className='container'>
            <Navigation></Navigation>
            {/* <Analytics /> */}
            <AnalyticsTable />
        </div>
    )
}