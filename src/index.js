import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { DateTimePicker } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

registerBlockType( 'codesista/event-block', {
	title: __('Event Date', 'codesista' ),
	icon: 'calendar',
	category: 'common',
	attributes: {
		title: {
			type: 'string'
		},
		event_date: {
			type: 'string'
		},
		nice_event_date: {
			type: 'string'
		}
	},
	example: {
		attributes: {
			title: __('Event Date', 'codesista' ),
			event_date: '2020-02-20 12:00',
			nice_event_date: 'February 20, 2020 at 12:00am',
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { event_date },
			setAttributes,
		} = props;
		const [ meta, setMeta ] = useEntityProp(
			'postType',
			'post',
			'meta'
		);
		const onChangeDate = ( value ) => {
			setAttributes({title: __('Event Date', 'codesista')});
			setMeta( { ...meta, 'codesista_event_date': moment(value).format('X'), 'codesista_nice_event_date': moment(value).format('dddd, MMMM D, YYYY [at] h:mma') } );
			// setMeta( { ...meta, 'codesista_event_date': moment(value).format('dddd, MMMM D, YYYY [at] h:mma') } );
			// setMeta( { ...meta, 'codesista_nice_event_date': moment(value).format('dddd, MMMM D, YYYY [at] h:mma') } );
			setAttributes({event_date: moment(value).format('YYYY-MM-DD HH:mm')});
			setAttributes({nice_event_date: moment(value).format('dddd, MMMM D, YYYY [at] h:mma')});
		};

		return (
			<div className={ className }>
				<DateTimePicker
					currentDate = {event_date}
					onChange = { onChangeDate }
					is12Hour = 'true'
				/>
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {title, nice_event_date},
		} = props;
		return (
			<div className={ className }>
				<h2>{ title }</h2>
				{nice_event_date}
			</div>
		);
	},
} );

