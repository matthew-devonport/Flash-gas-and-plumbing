
import React from 'react'

class FlashPlumbing extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="plumbingTitle">Plumbing Services</div>
                <ul className="flashPlumbing">
                    <div className="plumbingDesc">
                        <div className="popupTitle">General Maintenance</div>
                    <li>Repair, maintain, upgrade failing plumbing systems.</li><br />
                    <li>Improve sanitation, hygiene, health and safety of existing plumbing systems.</li><br />
                    <li>Manage leakages, loss of water pressure and blockages.</li><br />
                    <li>Solutions for drainage problems.</li><br />
                    <li>Fast efficient service for residential and commercial properties with excellent communication.</li><br />
                        <div className="popupTitle">Renovations</div>
                        <li>Kitchens, bathrooms laundries, business premises, e.g. medical, dental, hairdressers a speciality.</li><br />
                        <li>Can project manage with other trades.</li><br />
                        <li>Can provide helpful design suggestions.</li><br />
                        <li>Attention to detail and quality product assurance.</li><br />
                    </div>
                    <div className="plumbingDesc">
                        <div className="popupTitle">Hot water systems</div>
                        <li>Choice of electrical or gas appliances.</li><br />
                        <li>Hotwater cylinder replacements and maintenance.</li><br />
                        <li>Conversion from low pressure to high pressure systems.</li><br />
                        <div className="popupTitle">Water filters</div>
                        <li>Install high grade water filters to improve water quality.</li><br />
                        <li>Follow up maintenance program and reminders of filter replacement due date.</li><br />
                        <li>Custom made metal covers to weather protect filter system and improve appearance.</li><br />
                    </div>
                    <div className="plumbingDesc">
                        <div className="popupTitle">Water Testing</div>
                        <li>Analysis of water to residence or business premises to report water quality, hygiene, for health and safety.</li><br />
                        <li>Installation of water softener systems.</li><br />
                        <li>Regular maintenance program ensure continued water quality.</li><br />
                            <div className="popupTitle">Leak Detection</div>
                            <li>Detection of  water and sewage leaks.</li><br />
                            <li>Repair or replacement of leaking pipes and taps.</li><br />
                            <li>For complex issues access to specialists in this field to resolve problems.</li><br />
                        </div>
                    </ul>
            </React.Fragment>
        )
    }
}

export default FlashPlumbing 