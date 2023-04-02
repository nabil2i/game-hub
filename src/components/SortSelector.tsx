import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        Ordy By
      </MenuButton>
      <MenuList>
        <MenuItem>eztzet</MenuItem>
        <MenuItem>eztzet</MenuItem>
        <MenuItem>eztzet</MenuItem>
      
  
      </MenuList>
      
    </Menu>
  )
}

export default SortSelector