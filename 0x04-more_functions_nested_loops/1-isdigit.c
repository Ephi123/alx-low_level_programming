#include "main.h"
/**
 * _isdigit - checks whether a char is a digit or not
 * @c: the char to be checked
 *
 * Return: 1 if c is a number
 * 0 otherwise
 */
int _isdigit(int c)
{
if (c >= 48 && c <= 57)
{
return (1);
}
else
{
return (0);
}
}
