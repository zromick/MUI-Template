import { useState } from 'react';
import MUIBase from './MUIBase';
import { SnackbarModel } from '../models';

const MUIBaseContainer = () => {
	let [snackbar, setSnackbar] = useState<SnackbarModel>({ open: false, message: '', severity: 'success' });
	let [currentStep, setCurrentStep] = useState(0);
	let [nextDisabled, setNextDisabled] = useState(false);
	let [previousDisabled, setPreviousDisabled] = useState(true);

	const handleNext = () => {
		setCurrentStep(currentStep + 1);
		if (previousDisabled) {
			setPreviousDisabled(false);
		}
		if (currentStep === 2) {
			setNextDisabled(true);
		}
		setSnackbar({ open: false, message: '', severity: 'success' });
	}

	const handlePrevious = () => {
		setCurrentStep(currentStep - 1);
		if (currentStep - 1 === 0) {
			setPreviousDisabled(true);
		}
		if (nextDisabled) {
			setNextDisabled(false);
		}
		setSnackbar({ open: false, message: '', severity: 'success' });
	}

	const handleCancel = () => {
		setCurrentStep(0);
		setPreviousDisabled(true);
		setNextDisabled(false);
		setSnackbar({ open: false, message: '', severity: 'success' });
	}

	return (
		<MUIBase
			setSnackbar={setSnackbar}
			handleNext={handleNext}
			handlePrevious={handlePrevious}
			handleCancel={handleCancel}
			nextDisabled={nextDisabled}
			previousDisabled={previousDisabled}
			currentStep={currentStep}
			snackbar={snackbar}
		/>
	);
}

export default MUIBaseContainer;