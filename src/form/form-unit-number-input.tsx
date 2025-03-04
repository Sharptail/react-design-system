import { UnitNumberInput } from "../unit-number";
import { FormWrapper } from "./form-wrapper";
import { FormUnitNumberInputProps } from "./types";

export const FormUnitNumberInput = ({
    label,
    errorMessage,
    id = "form-unit-number-input",
    "data-error-testid": errorTestId,
    "data-testid": testId,
    ...otherProps
}: FormUnitNumberInputProps): JSX.Element => {
    return (
        <FormWrapper
            id={id}
            label={label}
            errorMessage={errorMessage}
            data-error-testid={errorTestId}
            disabled={otherProps.disabled}
        >
            <UnitNumberInput
                id={`${id}-base`}
                data-testid={testId || id}
                error={!!errorMessage}
                {...otherProps}
            />
        </FormWrapper>
    );
};
