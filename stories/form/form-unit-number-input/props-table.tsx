import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "UnitNumberInput specific props",
        attributes: [
            {
                name: "value",
                description: (
                    <>
                        The value of the unit number in string based
                        format.&nbsp;
                        <code>00-8888</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "The name of the component",
                propTypes: ["string"],
            },
            {
                name: "error",
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and entry is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component is readonly and entry is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "tabIndex",
                description: "Specifies the tab order of the component",
                propTypes: ["number"],
            },
            {
                name: "style",
                description: "Allows for inline styling of the component",
                propTypes: ["React.CSSProperties"],
            },
            {
                name: "role",
                description: "The aria role of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when the user enters a value in the field.
                        Returns value in&nbsp;
                        <code>00-8888</code>&nbsp;format. Should the value be
                        invalid, the&nbsp; &lsquo;Invalid unit number&rsquo;
                        value will be returned
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onChangeRaw",
                description: (
                    <>
                        Called when the user enters a value in the field.
                        Returns unformatted value in an array format as such [
                        <code>floor</code>, <code>unit</code>]
                    </>
                ),
                propTypes: ["(value: string[]) => void"],
            },
            {
                name: "onBlur",
                description: (
                    <>
                        Called when a defocus happens. Returns the existing
                        value in&nbsp;
                        <code>00-8888</code>&nbsp;format
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onBlurRaw",
                description: (
                    <>
                        Called when a defocus happens. Returns unformatted value
                        in an array format as such [<code>floor</code>,{" "}
                        <code>unit</code>]
                    </>
                ),
                propTypes: ["(value: string[]) => void"],
            },
            {
                name: "placeholder",
                description: (
                    <>
                        The placeholder text of the unit input as such{" "}
                        <code>floor-unit</code>
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
