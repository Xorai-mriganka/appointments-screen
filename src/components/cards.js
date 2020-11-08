import React, { Component } from 'react';
import SubcardName from './subcardName';
import SubcardStatus from './subcardStatus';
import SubcardContact from './subcardContact';
import SubcardTime from './subcardTime';
import './css/cards.css';
import Divider from '@material-ui/core/Divider';
import ListDividers from './List';

class Cards extends Component {
	static defaultProps = {
		Card1: [
			{
				id: 1,
				carname: '2011 BMW 3 series',
				customername: 'bryan adams',
				time: '8:00pm',
				contactnumber: '589-333-333',
				service: '2 repair | 1 recall',
				status: 'not arrived',
				statusname: 'Steve Robertson',
				totaltime: '15min',
				timeName: 'valet,premium cust',
			},
		],
		Card2: [
			{
				id: 2,
				carname: '2017 BMW 5 series',
				customername: 'Jack dam',
				time: '7:00pm',
				contactnumber: '389-333-333',
				service: '3 repair | 1 recall',
				status: 'arrived',
				statusname: 'Steve Robertson',
				totaltime: '18min',
				timeName: 'valet,premium cust',
			},
		],
		Card3: [
			{
				id: 3,
				carname: '2020 BMW 1 series',
				customername: 'Nagin chopra',
				time: '6:00pm',
				contactnumber: '989-333-333',
				service: '2 repair | 3 recall',
				status: 'not arrived',
				statusname: 'Steve Robertson',
				totaltime: '10min',
				timeName: 'valet,premium cust',
			},
		],
	};
	render() {
		return (
			<>
				<div className="Cards">
					<div className="Cardmainheader">
						<h1>8:00</h1>
						<h4>AM</h4>
					</div>
					<Divider />
					{this.props.Card1.map((p) => (
						<div className="card1">
							<SubcardName carname={p.carname} customername={p.customername} time={p.time} />
							<SubcardContact contactnumber={p.contactnumber} service={p.service} />
							<SubcardStatus status={p.status} statusname={p.statusname} />
							<SubcardTime totaltime={p.totaltime} timeName={p.timeName} />
						</div>
					))}
					<Divider />
					{this.props.Card2.map((p) => (
						<div className="card2">
							<SubcardName carname={p.carname} customername={p.customername} time={p.time} />
							<SubcardContact contactnumber={p.contactnumber} service={p.service} />
							<SubcardStatus status={p.status} statusname={p.statusname} />
							<SubcardTime totaltime={p.totaltime} timeName={p.timeName} />
						</div>
					))}
					<Divider />
					{this.props.Card3.map((p) => (
						<div className="card3">
							<SubcardName carname={p.carname} customername={p.customername} time={p.time} />

							<SubcardContact contactnumber={p.contactnumber} service={p.service} />

							<SubcardStatus status={p.status} statusname={p.statusname} />

							<SubcardTime totaltime={p.totaltime} timeName={p.timeName} />
						</div>
					))}
                    <Divider />
					<div className="Cardmainheader">
						<h1>12:00</h1>
						<h4>AM</h4>
					</div>
                    <Divider />
					{this.props.Card1.map((p) => (
						<div className="card1">
							<SubcardName carname={p.carname} customername={p.customername} time={p.time} />
							<SubcardContact contactnumber={p.contactnumber} service={p.service} />
							<SubcardStatus status={p.status} statusname={p.statusname} />
							<SubcardTime totaltime={p.totaltime} timeName={p.timeName} />
						</div>
					))}
					<Divider />
					{this.props.Card2.map((p) => (
						<div className="card2">
							<SubcardName carname={p.carname} customername={p.customername} time={p.time} />
							<SubcardContact contactnumber={p.contactnumber} service={p.service} />
							<SubcardStatus status={p.status} statusname={p.statusname} />
							<SubcardTime totaltime={p.totaltime} timeName={p.timeName} />
						</div>
					))}
					<Divider />
					{this.props.Card3.map((p) => (
						<div className="card3">
							<SubcardName carname={p.carname} customername={p.customername} time={p.time} />

							<SubcardContact contactnumber={p.contactnumber} service={p.service} />

							<SubcardStatus status={p.status} statusname={p.statusname} />

							<SubcardTime totaltime={p.totaltime} timeName={p.timeName} />
						</div>
					))}
				</div>
			</>
		);
	}
}

export default Cards;
