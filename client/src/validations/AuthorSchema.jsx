import * as yup from 'yup';

const AuthorSchema = yup.object.shape({
author: yup.string().required('name is required'),
title: yup .string().required('title is required')
})