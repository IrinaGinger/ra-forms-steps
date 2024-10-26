export interface IForm {
    date: string;
    distance: number;
}

export interface IFormProps {
    onSubmit: (form: IForm) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    form: IForm,
}

export interface ISteps {
    id: string,
    date: string,
    distance: number,
};

export interface IStepsProps {
    data: ISteps[],
    onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}