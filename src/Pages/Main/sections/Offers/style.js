import styled from "styled-components";
export const OffersSectionBox = styled.section`
    margin-top: 30px;
    background-color: ${props=>props.theme.palette.sectionBackground};
    border: 1px solid ${props=>props.theme.palette.gray300};
    border-radius: 6px;
    `;

export const SectionDetails = styled.div`
    padding: 20px;
    min-width: 281px;
    border-right: 1px solid #e0e0e0;
    `;
export const SectionNameH3 = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: ${props=>props.theme.palette.contentColor};
    `;

export const SectionDescriptionP = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color:${props=>props.theme.palette.gray500};
    margin-bottom: 18px;
    `;

export const OffersBox = styled.div`
    display: flex;
    width: calc(100% - 281px);
    `;
export const Flex = styled.div`
        display:flex;
    `