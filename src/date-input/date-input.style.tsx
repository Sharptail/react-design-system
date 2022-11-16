import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $addOn?: boolean;
}
interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: ${(props) => (props.$addOn ? "0" : "0.1rem 1rem 0")};

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `;
        }
    }}
`;

export const InputContainer = styled.div<ContainerStyleProps>`
    position: absolute;
    top: 0;
    left: ${(props) => (props.$addOn && !props.$readOnly ? "2rem" : "1rem")};
    height: 100%;
    display: flex;
    align-items: center;
`;

export const BaseInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    background: transparent;
    height: 100%;
    width: 2.5rem;
    border: none;
    text-align: center;
    padding: 0;

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;

    :focus,
    :active {
        outline: none;
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}
`;

export const MonthInput = styled(BaseInput)`
    width: 2.6rem;
`;

export const YearInput = styled(BaseInput)`
    width: 3.5rem;
`;

export const Divider = styled(Text.Body)<LabelStyleProps>`
    opacity: ${(props) => (props.$hide ? 0 : 1)};
    margin: 0.1rem 0.2rem 0 0.2rem;
`;

export const UnitNumberDivider = styled(Text.Body)<LabelStyleProps>`
    margin: 0 0.1rem 0 0.1rem;
    ${(props) => {
        if (props.$hide) {
            return css`
                color: ${Color.Neutral[3]};
            `;
        }
    }}
`;

export const MonthDivider = styled(Divider)`
    ${(props) => {
        if (props.$compress) {
            return css`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `;
        }
    }}
`;

// =============================================================================
// PLACEHOLDERS
// =============================================================================
export const PlaceholderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Placeholder = styled(Text.Body)<LabelStyleProps>`
    opacity: ${(props) => (props.$hide ? 0 : 1)};
    color: ${Color.Neutral[3]};
    display: inline;
    width: 2.5rem;
    text-align: center;
`;

export const PlaceholderDivider = styled(Divider)<LabelStyleProps>`
    color: ${Color.Neutral[3]};
`;

export const MonthPlaceholder = styled(Placeholder)<LabelStyleProps>`
    width: 2.6rem;
`;

export const YearPlaceholder = styled(Placeholder)<LabelStyleProps>`
    width: 3.5rem;
`;
