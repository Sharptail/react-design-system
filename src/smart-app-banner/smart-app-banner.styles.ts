import styled, { css, keyframes } from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { Icon } from "../icon";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";

const slideDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const SmartAppBannerContainer = styled.div<{
    $offset: number;
    $isAnimated: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${(props) => {
        return `top: ${props.$offset}px;`;
    }}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: #ffffff;
    box-shadow: 0px 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${(props) => {
        if (props.$isAnimated)
            return css`
                animation: ${slideDown} 0.5s;
            `;
    }}
`;

export const DismissContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`;

export const DismissButton = styled(IconButton)`
    padding: 0;
    svg {
        color: ${Color.Neutral[1]};
    }
`;

export const CrossIcon = styled(Icon)`
    color: ${Color.Neutral[1]};
`;

export const ProceedContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
`;
export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${MediaQuery.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`;

export const LifeSgAppIcon = styled.img`
    width: 42.5px;
    align-self: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledButton = styled(Button.Small)`
    padding: 0.5rem;
    & > span {
        ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
    }
`;

export const Title = styled(Text.H6)`
    ${MediaQuery.MaxWidth.mobileM} {
        ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
    }
`;

export const Description = styled(Text.XSmall)``;

export const RatingContainer = styled.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;

    img {
        height: 1.5rem;
        width: 1.5rem;
        padding-right: 0.25rem;
    }
`;
