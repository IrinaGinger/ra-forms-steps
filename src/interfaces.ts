export interface IForm {
    date: string;
    distance: string;
}

export interface IFormProps {
    onSubmit: (form: IForm) => void,
}

export interface ISteps {
    id: string,
    date: string,
    distance: string,
};

export interface IStepsProps {
    data: ISteps[],
    onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}