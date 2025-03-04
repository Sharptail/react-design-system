import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text";
import { Transition } from "../transition";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface StyleProps {
    error?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Element = styled.textarea<StyleProps>`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Transition.Base};

    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};
    background: ${Color.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }

    ${(props) => {
        if (props.readOnly) {
            return css`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus,
                :active {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `;
        }
    }}
`;
