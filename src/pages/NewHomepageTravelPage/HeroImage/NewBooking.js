import * as React from 'react';
import AppFooter from '../../../modules/views/AppFooter';
import withRoot from '../../../modules/withRoot';
import NewAppBar from '../NewAppBar';
import BookEmail from './BookEmail';
import NewBookingForm from './NewBookingForm';

function NewBooking() {

    return (
        <React.Fragment>
            <NewAppBar />
            <NewBookingForm />
            <BookEmail />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(NewBooking);
