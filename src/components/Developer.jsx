import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useFBX, useGLTF} from '@react-three/drei'

const Developer = ({animationName = 'idle', ...props})=> {

    const {animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
    const {animations: lookingAnimation } = useFBX('/models/animations/looking.fbx')
    const {animations: bowAnimation } = useFBX('/models/animations/bow.fbx')
    const {animations: wavingAnimation } = useFBX('/models/animations/waving.fbx')
    const { nodes, materials } = useGLTF("/models/animations/developer.glb")

        const group = useRef(null)


    idleAnimation[0].name = 'idle' ;
    lookingAnimation[0].name = 'looking' ;
    bowAnimation[0].name = 'bow' ;
    wavingAnimation[0].name = 'waving' ;

    const allAnimations = [
        idleAnimation[0],
        lookingAnimation[0],
        bowAnimation[0],
        wavingAnimation[0]
    ];

        const { actions } = useAnimations(allAnimations, group);

    useEffect(() => {
        if (actions && actions[animationName]) {
            // Important: setează manual rotația corectă pentru grup
            if (group.current) {
                group.current.rotation.x = -Math.PI / 2; // sau -Math.PI / 2, testează ambele!
            }

            actions[animationName].play()


        }
    }, [animationName, actions])




    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    )
}

useGLTF.preload('/models/animations/developer.glb')

export default Developer;