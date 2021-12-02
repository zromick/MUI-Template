import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MUISteps from './MUISteps';

interface MUIProgressBarProps {
  step: MUISteps;
}

const MUIProgressBar = (props: MUIProgressBarProps) => {
  const { step } = props;
  const steps = ['Introduction',];

  return (
    <div>
      <Stepper
        activeStep={step}
        alternativeLabel
        style={{ backgroundColor: 'transparent' }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default MUIProgressBar;