import React, { createContext } from 'react';

const MethodsContext = createContext({
  methods: [],
  setMethods: () => {}
});

export default MethodsContext;