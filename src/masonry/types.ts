import React from "react";

export interface ColumnCountAttribute {
    /** number of columns on desktop resolutions */
    lg?: number | undefined;
    /** number of columns on tablet resolutions */
    md?: number | undefined;
    /** number of columns on mobile resolutions */
    sm?: number | undefined;
}

export interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
    numOfCols: ColumnCountAttribute;
    children: JSX.Element | JSX.Element[];
}

export interface MasonryTileProps extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element;
    /** the column to start on desktop resolutions */
    startLg?: number | undefined;
    /** the number of columns to span on desktop resolutions */
    colsLg?: number | undefined;
    /** the column to start on tablet resolutions */
    startMd?: number | undefined;
    /** the number of columns to span on tablet resolutions */
    colsMd?: number | undefined;
    /** the column to start on mobile resolutions */
    startSm?: number | undefined;
    /** the number of columns to span on mobile resolutions */
    colsSm?: number | undefined;
}
