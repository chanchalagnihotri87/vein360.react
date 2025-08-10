import type { FC } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";

interface ValidationMessageProps {
  errors: FieldErrors<FieldValues>;
  fielName: string;
}

const ValidationMessage: FC<ValidationMessageProps> = ({
  errors,
  fielName,
}) => {
  console.log(errors);
  return (
    <>
      {errors && errors[fielName] && errors[fielName].type == "required" && (
        <span className="text-danger">* Required</span>
      )}

      {errors &&
        errors[fielName] &&
        (errors[fielName].type == "maxLength" ||
          errors[fielName].type == "minLength") && (
          <span className="text-danger">
            {errors[fielName].message as string}
            {/* Message Examples */}
            {/*  maxLength: { value: 4,  message: "  * Max 4 characters"} */}
            {/*  minLength: { value: 4,  message: "  * Min 4 characters"} */}
          </span>
        )}
    </>
  );
};

export default ValidationMessage;
