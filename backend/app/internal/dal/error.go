package dal

import "errors"

type DALError struct {
	Err     error  `json:"-"`
	Message string `json:"message,omitempty"`
	Code    string `json:"code,omitempty"`
}

func NewAppError(code, message string) *DALError {
	return &DALError{
		Err:     errors.New(message),
		Code:    code,
		Message: message,
	}
}

func (e *DALError) Error() string {
	return e.Err.Error()
}

func (e *DALError) Unwrap() error { return e.Err }

var (
	ErrNotFound = errors.New("not found")
    ErrNothingInserted = errors.New("nothing inserted")
	ErrIntegrityConstraintViolation = errors.New("unique violation")
)