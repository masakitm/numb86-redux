// ActionCreator
export const incActionCreator = (num = 1) => ({
  type: 'INC_COUNTER',
  num,
});

export const decActionCreator = (num = 1) => ({
  type: 'DEC_COUNTER',
  num,
});

export const mulActionCreator = (num = 1) => ({
  type: 'MUL_COUNTER',
  num,
});

export const divActionCreator = (num = 1) => ({
  type: 'DIV_COUNTER',
  num,
});
